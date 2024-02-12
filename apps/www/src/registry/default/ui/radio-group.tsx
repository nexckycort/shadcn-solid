import { cn } from "@/lib/cn"
import { RadioGroup as RadioGroupPrimitive } from "@kobalte/core"
import type { VoidComponent } from "solid-js"
import { splitProps } from "solid-js"

export const RadioGroupDescription = RadioGroupPrimitive.Description
export const RadioGroupErrorMessage = RadioGroupPrimitive.ErrorMessage
export const RadioGroupItemDescription = RadioGroupPrimitive.ItemDescription
export const RadioGroupItemInput = RadioGroupPrimitive.ItemInput
export const RadioGroupItemLabel = RadioGroupPrimitive.ItemLabel
export const RadioGroupLabel = RadioGroupPrimitive.Label
export const RadioGroup = RadioGroupPrimitive.Root
export const RadioGroupItem = RadioGroupPrimitive.Item

export const RadioGroupItemControl: VoidComponent<
  RadioGroupPrimitive.RadioGroupItemControlProps
> = (props) => {
  const [local, rest] = splitProps(props, ["class"])

  return (
    <RadioGroupPrimitive.ItemControl
      as="button"
      role="radio"
      class={cn(
        "border-primary text-primary focus-visible:ring-ring data-[checked]:bg-foreground flex aspect-square h-4 w-4 items-center justify-center rounded-full border shadow focus:outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
      {...rest}
    >
      <RadioGroupPrimitive.ItemIndicator class="data-[checked]:bg-background h-2 w-2 rounded-full" />
    </RadioGroupPrimitive.ItemControl>
  )
}
