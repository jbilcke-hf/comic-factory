import { useStore } from "@/app/store"
import { VerticalSlider } from "@/components/ui/vertical-slider"
import { cn } from "@/lib/utils"

export function Zoom() {
  const zoomLevel = useStore((state) => state.zoomLevel)
  const setZoomLevel = useStore((state) => state.setZoomLevel)

  return (
    <div className={cn(
      // `fixed flex items-center justify-center bottom-8 top-32 right-8 z-10 h-screen`,
      `fixed flex flex-col items-center bottom-8 top-32 md:top-20 right-6 z-10`
    )}>
      <div className="font-mono text-xs pb-1 text-stone-700">
        Zoom
      </div>
      <div className="w-2">
        <VerticalSlider
          defaultValue={[zoomLevel]}
          min={30}
          max={200}
          step={1}
          onValueChange={value => setZoomLevel(value[0] || 10)}
          value={[zoomLevel]}
          className="h-48"
          orientation="vertical"
        />
      </div>
    </div>
  )
}