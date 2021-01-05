import React from "react";
import CSS from "csstype";
import { DEFAULT_HEALTH_CAP } from "./contants";

interface OwnProps {
  health: number;
  healthCap?: number;
  showHealthValue?: boolean;
}

export type HealthBarProps = OwnProps;

class HealthBar extends React.PureComponent<HealthBarProps> {
  public render() {
    const {
      health,
      healthCap = DEFAULT_HEALTH_CAP,
      showHealthValue = true,
    } = this.props;

    const barWidth: CSS.Properties = {
      width: `${(health / healthCap) * 100}%`,
    };

    const colour = getColour(health, healthCap);
    return (
      <div className="progress progress-bar-vertical">
        <div className={`progress-bar ${colour}`} style={barWidth}>
          {showHealthValue ? health : ""}
        </div>
      </div>
    );
  }
}

const getColour = (resource: number, resource_max: number) => {
  const resource_percentage = (resource / resource_max) * 100;
  switch (true) {
    case resource_percentage <= 20:
      return "bg-danger";
    case resource_percentage <= 60:
      return "bg-warning";
    default:
      return "bg-success";
  }
};

export default HealthBar;
