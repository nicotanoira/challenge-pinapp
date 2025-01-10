"use client";
import React from "react";
import { List } from "antd";

interface Spec {
  name: string;
  value: string;
}

interface SpecListProps {
  specList: Spec[];
}

const SpecList: React.FC<SpecListProps> = ({ specList }) => (
  <>
    <List
      size="small"
      bordered
      dataSource={specList}
      renderItem={(spec) => (
        <List.Item>
          <span className="text-gray-500 text-base font-medium">
            {spec.name}: {spec.value}
          </span>
        </List.Item>
      )}
    />
  </>
);

export default SpecList;
