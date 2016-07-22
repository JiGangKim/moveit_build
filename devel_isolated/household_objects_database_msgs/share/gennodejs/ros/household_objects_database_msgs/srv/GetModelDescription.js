// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let DatabaseReturnCode = require('../msg/DatabaseReturnCode.js');

//-----------------------------------------------------------

class GetModelDescriptionRequest {
  constructor() {
    this.model_id = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelDescriptionRequest
    // Serialize message field [model_id]
    bufferInfo = _serializer.int32(obj.model_id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelDescriptionRequest
    let tmp;
    let len;
    let data = new GetModelDescriptionRequest();
    // Deserialize message field [model_id]
    tmp = _deserializer.int32(buffer);
    data.model_id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelDescriptionRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '28cb0598daf3b969068a38cd07aaa9f6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    int32 model_id
    
    
    `;
  }

};

class GetModelDescriptionResponse {
  constructor() {
    this.return_code = new DatabaseReturnCode();
    this.tags = [];
    this.name = '';
    this.maker = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelDescriptionResponse
    // Serialize message field [return_code]
    bufferInfo = DatabaseReturnCode.serialize(obj.return_code, bufferInfo);
    // Serialize the length for message field [tags]
    bufferInfo = _serializer.uint32(obj.tags.length, bufferInfo);
    // Serialize message field [tags]
    obj.tags.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [maker]
    bufferInfo = _serializer.string(obj.maker, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelDescriptionResponse
    let tmp;
    let len;
    let data = new GetModelDescriptionResponse();
    // Deserialize message field [return_code]
    tmp = DatabaseReturnCode.deserialize(buffer);
    data.return_code = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [tags]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tags]
    data.tags = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.tags[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [maker]
    tmp = _deserializer.string(buffer);
    data.maker = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelDescriptionResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e6c55e34b143695104d37ad9b33c72c0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    DatabaseReturnCode return_code
    
    
    string[] tags
    
    
    string name
    
    
    string maker
    
    
    
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
  Request: GetModelDescriptionRequest,
  Response: GetModelDescriptionResponse
};
