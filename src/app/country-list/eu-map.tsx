import clsx, { ClassValue } from "clsx";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import geoJson from "#/data/europe.json";
import { COUNTRIES, CountryName } from "#/data/countries";
import _ from "lodash";
import mapColour from "#/data/colourmap";
import { Topic } from ".";

import scoresAll from "#/data/scores/scores_all.json";
import scoresDiscrim from "#/data/scores/scores_discrimination.json";
import scoresPublic from "#/data/scores/scores_public.json";
import scoresRights from "#/data/scores/scores_rights.json";
import scoresSafety from "#/data/scores/scores_safety.json";

function getColour(input: number, data: any) {
    const min = _(data).values().min()!;
    const max = _(data).values().max()!;
    const score = (input - min) / (max - min);
    return mapColour(score);
}

function pickData(topic: Topic) {
    switch (topic) {
        case "all":
            return scoresAll;
        case "discrim":
            return scoresDiscrim;
        case "public":
            return scoresPublic;
        case "rights":
            return scoresRights;
        case "safety":
            return scoresSafety;
        default:
            return {} as never;
    }
}

type props = {
    activeTopic: Topic;
    x?: ClassValue[];
};

export default function EuMap({ activeTopic, x }: props) {
    const svgRef = useRef<any>(null);
    const data = pickData(activeTopic);

    useEffect(
        function drawEuMap() {
            if (!svgRef.current) return;

            function doDraw() {
                const svg = d3.select(svgRef.current);
                svg.selectAll("*").remove();

                const { width, height } = svgRef.current.getBoundingClientRect();

                const projection = d3.geoOrthographic();

                const [rotx, roty] = [15, 20];
                projection.rotate([-rotx, -roty]);

                const otl: [number, number] = [-30, 70];
                const obr: [number, number] = [35, 33.75];

                {
                    const [lx, ty] = projection(otl)!;
                    const [rx, by] = projection(obr)!;

                    const dx = rx - lx;
                    const dy = by - ty;
                    const scale = projection.scale() * Math.min((height - 50) / dy, width / dx);
                    projection.scale(scale);
                }

                {
                    const [prox, proy] = projection([rotx, roty])!;
                    const [rx, by] = projection(obr)!;

                    const dox = rx - prox;
                    const doy = proy - by;
                    projection.translate([width - dox, 0.975 * height + doy]);
                }

                const graticule = d3.geoGraticule().step([10, 10]);
                const pathGenerator = d3.geoPath().projection(projection);

                svg.selectAll("path.graticule")
                    .data([graticule()])
                    .enter()
                    .append("path")
                    .attr("fill", "none")
                    .attr("stroke", "#d4d4d4")
                    .attr("stroke-dasharray", "1,5")
                    .attr("d", pathGenerator);

                svg.append("g")
                    .selectAll("path")
                    .data(geoJson.features)
                    .enter()
                    .append("path")
                    // @ts-ignore
                    .attr("d", d3.geoPath().projection(projection))
                    .attr("fill", feature => {
                        const countryName = feature.properties.NAME;
                        if (!COUNTRIES.includes(countryName as CountryName)) return "#f5f5f5";
                        return getColour((data as any)[countryName], data);
                    })
                    .style("stroke", "#fff");
            }

            doDraw();
            window.addEventListener("resize", doDraw);

            return () => window.removeEventListener("resize", doDraw);
        },
        [activeTopic]
    );

    return <svg ref={svgRef} className={clsx("fixed top-0 left-0", x)} width="100%" height="100%" />;
}
