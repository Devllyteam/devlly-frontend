https://awesome-shadcn-ui.vercel.app/
https://icons.pqoqubbw.dev/
https://shadcn-cookie-consent.vercel.app/
https://shadcn-chat.vercel.app/
https://shadcn-pricing-page.vercel.app/
https://www.onborda.dev/page-two
https://ui.jln.dev/
https://animata.design/docs/setup
https://icon-sets.iconify.design/
https://www.streamlinehq.com/illustrations/milano?icon=ico_Az99GUnz0miCgRLF

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="rounded-lg border border-border bg-background px-3 py-2 shadow-sm shadow-black/5">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Home size={16} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}



