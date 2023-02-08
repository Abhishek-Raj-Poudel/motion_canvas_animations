import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Circle, Layout, Rect } from "@motion-canvas/2d/lib/components";
import { all, delay, sequence, waitFor } from "@motion-canvas/core/lib/flow";
export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();
  const rectangle2 = createRef<Rect>();

  view.add(
    <>
      <Rect ref={rectangle2} width={50} height={50} radius={25} fill={"red"} />
      <Rect
        ref={rect}
        width={50}
        height={50}
        radius={25}
        scale={{ x: 1, y: 1 }}
        fill={"white"}
      />
    </>
  );

  yield* rect().scale({ x: 3, y: 1 }, 1);
});
