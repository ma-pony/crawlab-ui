import {
  DATA_FIELD_TYPE_AUDIO,
  DATA_FIELD_TYPE_CURRENCY, DATA_FIELD_TYPE_TIME,
  DATA_FIELD_TYPE_GENERAL, DATA_FIELD_TYPE_IMAGE,
  DATA_FIELD_TYPE_NUMERIC,
  DATA_FIELD_TYPE_URL, DATA_FIELD_TYPE_VIDEO, DATA_FIELD_TYPE_HTML, DATA_FIELD_TYPE_LONG_TEXT
} from "@/constants/dataFields";

const result: LComponentsResult = {
  form: {
    dataType: 'Data Type',
  },
  types: {
    [DATA_FIELD_TYPE_GENERAL]: 'General',
    [DATA_FIELD_TYPE_NUMERIC]: 'Numeric',
    [DATA_FIELD_TYPE_TIME]: 'Time',
    [DATA_FIELD_TYPE_CURRENCY]: 'Currency',
    [DATA_FIELD_TYPE_URL]: 'URL',
    [DATA_FIELD_TYPE_IMAGE]: 'Image',
    [DATA_FIELD_TYPE_AUDIO]: 'Audio',
    [DATA_FIELD_TYPE_VIDEO]: 'Video',
    [DATA_FIELD_TYPE_HTML]: 'HTML',
    [DATA_FIELD_TYPE_LONG_TEXT]: 'Long Text',
  }
};

export default result;
