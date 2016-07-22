// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let DatabaseReturnCode = require('../msg/DatabaseReturnCode.js');

//-----------------------------------------------------------

class GetModelListRequest {
  constructor() {
    this.model_set = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelListRequest
    // Serialize message field [model_set]
    bufferInfo = _serializer.string(obj.model_set, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelListRequest
    let tmp;
    let len;
    let data = new GetModelListRequest();
    // Deserialize message field [model_set]
    tmp = _deserializer.string(buffer);
    data.model_set = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelListRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6bdf0a866151f41b8876e73800929933';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    
    
    string model_set
    
    
    `;
  }

};

class GetModelListResponse {
  constructor() {
    this.return_code = new DatabaseReturnCode();
    this.model_ids = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelListResponse
    // Serialize message field [return_code]
    bufferInfo = DatabaseReturnCode.serialize(obj.return_code, bufferInfo);
    // Serialize the length for message field [model_ids]
    bufferInfo = _serializer.uint32(obj.model_ids.length, bufferInfo);
    // Serialize message field [model_ids]
    obj.model_ids.forEach((val) => {
      bufferInfo = _serializer.int32(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelListResponse
    let tmp;
    let len;
    let data = new GetModelListResponse();
    // Deserialize message field [return_code]
    tmp = DatabaseReturnCode.deserialize(buffer);
    data.return_code = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [model_ids]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [model_ids]
    data.model_ids = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.int32(buffer);
      data.model_ids[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelListResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '81fac8c5d631e612bd9183a923572d53';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    DatabaseReturnCode return_code
    
    
    int32[] model_ids
    
    ================================================================================
    MSG: household_objects_database_msgs/DatabaseReturnCode
    # return codes for database-related services
    
    int32 UNKNOWN_ERROR = 1
    int32 DATABASE_NOT_CONNECTED = 2
    int32 DATABASE_QUERY_ERROR = 3
    int32 SUCCESS = -1
    
    int32 code
    `;
  }

};

module.exports = {
  Request: GetModelListRequest,
  Response: GetModelListResponse
};
