import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center gap-1 rounded-full px-3 py-1 text-[13px] font-semibold md:text-xs', {
  variants: {
    variant: {
      default: 'bg-mint/25 text-ink',
      award: 'bg-accent/10 text-accent-ink',
      outline: 'ring-1 ring-inset ring-line/20 text-ink-soft',
    },
  },
  defaultVariants: { variant: 'default' },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
