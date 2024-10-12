import { useCallback } from "react";
import {
  BezierEdge,
  EdgeProps,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

const CustomEdge = (props: EdgeProps) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  } = props;

  const { setEdges } = useReactFlow();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });
  const handleDeleteEdge = useCallback(() => {
    return setEdges((prevEdge) => {
      return prevEdge.filter((edge) => edge.id !== id);
    });
  }, [id, setEdges]);

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <button
          style={{
            border: "none",
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            color: "red",
            background: "transparent",
            pointerEvents: "auto",
            cursor:"pointer"
          }}
          onClick={()=>handleDeleteEdge()}
        >
          X
        </button>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
