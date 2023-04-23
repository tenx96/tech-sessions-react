import {
  Breadcrumbs,
  Column,
  PageHeader,
  Row,
} from "@innovaccer/design-system";
import { Sidebar } from "./Sections/Sidebar/Sidebar";

export function DemoPage() {
  return (
    <Row>
      <Column size={12}>
        <PageHeader
          title="Page title"
          breadcrumbs={
            <Breadcrumbs
              list={[
                {
                  label: "Home",
                },
              ]}
            />
          }
        />
      </Column>
      <Column size={8}>
        <div>MAIN SECTION!</div>
      </Column>
      <Column size={4}>
        <Sidebar />
      </Column>
    </Row>
  );
}
