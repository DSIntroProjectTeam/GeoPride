import clsx from "clsx";
import * as d3 from "d3";
import { useEffect, useLayoutEffect, useRef } from "react";
import geoJson from "#/data/europe.json";

export default function EuMap() {
    const svgRef = useRef<any>(null);

    useEffect(function drawEuMap() {
        if (!svgRef.current) return;

        function doDraw() {
            const svg = d3.select(svgRef.current);
            const { width, height } = svgRef.current.getBoundingClientRect();

            const projection = d3.geoOrthographic();

            // projection.scale(width / 1 / Math.PI);
            // projection.rotate([-25, -35]);
            // projection.translate([(2 * width) / 3, height / 2]);
            // const scale = Math.max((Math.PI * width) / (40 + 20), (Math.PI * height) / 2);
            projection.scale(1200 * (height / 720));
            projection.rotate([-15, -35]);
            projection.translate([(2.25 * width) / 3, height]);

            const graticule = d3.geoGraticule().step([10, 10]);
            const pathGenerator = d3.geoPath().projection(projection);

            svg.append("circle")
                .attr("r", 5)
                .attr("transform", function () {
                    return "translate(" + projection([0, 0]) + ")";
                });

            svg.append("g")
                .selectAll("path")
                .data(geoJson.features)
                .enter()
                .append("path")
                .attr("fill", "#69b3a2")
                .attr("d", d3.geoPath().projection(projection))
                .style("stroke", "#fff");

            svg.append("circle")
                .attr("r", 5)
                .attr("transform", function () {
                    return "translate(" + projection([10, 50]) + ")";
                });

            svg.selectAll("path.graticule")
                .data([graticule()])
                .enter()
                .append("path")
                .attr("fill", "none")
                .attr("stroke", "#d4d4d4")
                .attr("stroke-dasharray", "1,5")
                .attr("d", pathGenerator);

            // svg.selectAll("path.graticule")
            //     .style("fill", "none")
            //     .style("stroke", "#d4d4d4")
            //     .style("stroke-dasharray", "1,1");

            // lines.enter().append("path").classed("graticule", true);
            // lines.attr("d", pathGenerator);
            // lines.exit().remove();
        }

        function redraw() {
            console.log("Redraw");
            const svg = d3.select(svgRef.current);
            svg.selectAll("*").remove();
            doDraw();
        }

        doDraw();
        window.addEventListener("resize", redraw);

        return () => window.removeEventListener("resize", redraw);
    }, []);

    return (
        <svg
            ref={svgRef}
            className={clsx("border border-neutral-300", "absolute top-0 left-0")}
            width="100%"
            height="100%"
        />
    );
}
