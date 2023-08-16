import GrandParent from "@/components/grandParent";
import ColorProvider from "@/components/colorProvider";

const ContextTest = () => {
    return (
        <ColorProvider>
            <GrandParent />
        </ColorProvider>
    )
}

export default ContextTest