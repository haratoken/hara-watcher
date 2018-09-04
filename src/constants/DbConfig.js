import AWS from "aws-sdk";
import { DataMapper } from '@aws/dynamodb-data-mapper';

const AWSaccesssKeyId = "not-important";
const AWSsecretAccessKey = "not-important";
const AWSregion = process.env.REGION ? process.env.REGION : "local";
const AWSendpoint = "http://dynamodb_local:8000";

export const configDB = () => {
  let config = {
    accessKeyId: AWSaccesssKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion,
  }

  if(process.env.IS_DEV) {
    config = {
      ...config,
      endpoint: AWSendpoint,
      credentials: false,
    }
  }

  console.log(config);

  return config;
}

export const InitDB = () => {
  AWS.config.update(configDB());

  return new AWS.DynamoDB.DocumentClient();
};

const client = new AWS.DynamoDB(configDB());
export const Mapper = new DataMapper({client});

export const TB_HARA_BLOCK = process.env.TB_HARA_BLOCK ? process.env.TB_HARA_BLOCK : "hara_block_dev" ;

