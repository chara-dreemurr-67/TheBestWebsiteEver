import type { JSX } from "react";

const RenderColor = (...Items: [string, string][]): JSX.Element => {
    if(Items.length === 1) {
        const [Text, Color]: [string, string] = Items[0];
        return (
            <span 
                className="transition-colors duration-[.3s] hover:text-[color:var(--hover-color)]" 
                style={
                    {
                        "--hover-color": Color
                    } as React.CSSProperties
                }
            >
                {Text}
            </span>
        );
    }

    return (
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
    );
};

export default RenderColor;