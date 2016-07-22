// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class DatabaseReturnCode {
  constructor() {
    this.code = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DatabaseReturnCode
    // Serialize message field [code]
    bufferInfo = _serializer.int32(obj.code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DatabaseReturnCode
    let tmp;
    let len;
    let data = new DatabaseReturnCode();
    // Deserialize message field [code]
    tmp = _deserializer.int32(buffer);
    data.code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'household_objects_database_msgs/DatabaseReturnCode';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b649fd6fa3a4e3bf8e3f4b4e648fa0f1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # return codes for database-related services
    
    int32 UNKNOWN_ERROR = 1
    int32 DATABASE_NOT_CONNECTED = 2
    int32 DATABASE_QUERY_ERROR = 3
    int32 SUCCESS = -1
    
    int32 code
    `;
  }

};

// Constants for message
DatabaseReturnCode.Constants = {
  UNKNOWN_ERROR: 1,
  DATABASE_NOT_CONNECTED: 2,
  DATABASE_QUERY_ERROR: 3,
  SUCCESS: -1,
}

module.exports = DatabaseReturnCode;
