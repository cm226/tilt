import React from "react"
import { MemoryRouter } from "react-router"
import OverviewTable, { TableGroupedByLabels } from "./OverviewTable"
import { ResourceGroupsContextProvider } from "./ResourceGroupsContext"
import {
  nButtonView,
  nResourceView,
  nResourceWithLabelsView,
  tenResourceView,
  twoResourceView,
} from "./testdata"

export default {
  title: "New UI/Overview/OverviewTable",
  decorators: [
    (Story: any) => (
      <MemoryRouter initialEntries={["/"]}>
        <ResourceGroupsContextProvider>
          <div style={{ margin: "-1rem" }}>
            <Story />
          </div>
        </ResourceGroupsContextProvider>
      </MemoryRouter>
    ),
  ],
}

export const TwoResources = () => <OverviewTable view={twoResourceView()} />

export const TenResources = () => {
  return <OverviewTable view={tenResourceView()} />
}

// TODO: When table resource groups are live, OverviewTable component
// can be used directly here instead of TableGroupedByLabels
export const TenResourceWithLabels = () => {
  return <TableGroupedByLabels view={nResourceWithLabelsView(10)} />
}

export const OneHundredResources = () => {
  return <OverviewTable view={nResourceView(100)} />
}

export const OneButton = () => {
  return <OverviewTable view={nButtonView(1)} />
}

export const TenButtons = () => {
  return <OverviewTable view={nButtonView(10)} />
}
