import { WorksTabs } from "@/components/works/tabs-works";
import {
  Creatives,
} from "@/components/works/creatives";

export default function WorksPage() {
  return (
    <WorksTabs
      creativesContent={<Creatives />}
    />
  );
}