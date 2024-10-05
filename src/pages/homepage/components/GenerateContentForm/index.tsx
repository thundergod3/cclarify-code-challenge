import { Button, Input, Spin } from "antd";
import { useCallback, useMemo, useState } from "react";

import COLORS from "src/constants/colors";
import { useAppDispatch, useAppSelector } from "src/stores/stores";
import { generateContentByAI } from "src/stores/contentSlice";

import TopicList from "../TopicList";
import { PencilAiIcon } from "src/components/atoms/Icons";
import AnimationLetter from "src/components/atoms/AnimationLetter";

const { TextArea } = Input;

const GenerateContentForm = () => {
  const dispatch = useAppDispatch();
  const { content, loading, topicType } = useAppSelector(
    (state) => state.content
  );
  const { isDarkMode } = useAppSelector((state) => state.common);

  const [keyword, setKeyword] = useState("");

  const handleGenerateContentByAI = useCallback(async () => {
    await dispatch(
      generateContentByAI({
        topic: topicType,
        keyword,
      })
    );

    setKeyword("");
  }, [topicType, keyword]);

  const colorPencilAIIcon = useMemo(() => {
    if (isDarkMode) {
      return keyword ? "black" : COLORS.light1;
    }

    return keyword ? "white" : COLORS.light2;
  }, [isDarkMode, keyword]);

  return (
    <div className="flex flex-col gap-6">
      <TopicList />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <Spin spinning={loading}>
            <TextArea
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="e.g. I saved a customer $10,000 with this advice..."
              className="border-light1"
              rows={4}
            />
          </Spin>
          {keyword && (
            <div className="ml-auto w-fit">
              <span className="text-sm dark:text-white">{keyword?.length}</span>
            </div>
          )}
        </div>
        {content && <AnimationLetter text={content} />}
      </div>
      <Button
        loading={loading}
        disabled={!keyword}
        type="primary"
        icon={<PencilAiIcon color={colorPencilAIIcon} />}
        className="text-white bg-primary dark:bg-white md:w-fit md:ml-auto h-10 rounded-xl disabled:text-light2 dark:disabled:bg-light2 dark:disabled:text-light1 !border-transparent dark:text-black"
        onClick={handleGenerateContentByAI}>
        Magic write
      </Button>
    </div>
  );
};

export default GenerateContentForm;
