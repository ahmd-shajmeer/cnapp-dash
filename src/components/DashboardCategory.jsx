import Widget from "./Widget";
import DonutChart from "./Charts/DonutChart";
import AddWidgetDrawer from "./Drawers/AddWidgetDrawer";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import StackedBarChart from "./Charts/StackedBarChart";

export default function DashboardCategory({ category = null }) {
  return (
    <Box sx={{ padding: "1rem 0 0" }}>
      {category && (
        <>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{ paddingBottom: "0.35rem" }}>
            {category.name}
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}>
            {category.widgets.map(
              (widget) =>
                widget.isActive && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={widget.id}>
                    <Widget
                      categoryId={category.id}
                      widget={widget}>
                      <DonutChart data={widget.chartData} />
                    </Widget>
                  </Grid>
                )
            )}
            <Grid
              item
              xs={12}
              sm={6}
              md={4}>
              <Card
                sx={{
                  height: "100%",
                  minHeight: "200px",
                  backgroundColor: "#f5f5f5",
                }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}>
                  <AddWidgetDrawer categoryId={category.id} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
      { category && category.widgets.length === 0 && (
        <StackedBarChart data={category.widgets[0].chartData} />
      )}
    </Box>
  );
}
