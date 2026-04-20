import type { JSX } from "react";

const RenderColor = (...Items: [string, string][]): JSX.Element => Items.length === 1 ? 
    <span 
        className="transition-colors duration-[.3s] hover:text-[color:var(--hover-color)]" 
        style={
            {
                "--hover-color": Items[0][1]
            } as React.CSSProperties
        }
    >
        {Items[0][0]}
    </span>
    :
    <span className="group">
        {Items.map(([Text, Color]: [string, string], Index: number): JSX.Element => (
            <span
                key={Index}
                className="transition-colors duration-[.3s] group-hover:text-[color:var(--hover-color)]"
                style={
                    {
                        "--hover-color": Color
                    } as React.CSSProperties
                }
            >
                {Text}
            </span>
        ))}
    </span>
;

export default RenderColor;