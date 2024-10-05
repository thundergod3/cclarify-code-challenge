import useTopicListLayout from "src/hooks/topics/useTopicListLayout";

import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "src/stores/stores";
import { setContent, setTopicType } from "src/stores/contentSlice";

import TopicItem from "src/components/atoms/TopicItem";

const TopicList = () => {
  const dispatch = useAppDispatch();
  const { topicType } = useAppSelector((state) => state.content);

  const layout = useTopicListLayout();

  const handleTopicChoose = useCallback((value: string) => {
    dispatch(setTopicType(value));
    dispatch(setContent(""));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {layout.map((record) => (
        <TopicItem
          key={record?.value}
          isActive={topicType === record?.value}
          onTopicChoose={handleTopicChoose}
          {...record}
        />
      ))}
    </div>
  );
};

export default TopicList;
