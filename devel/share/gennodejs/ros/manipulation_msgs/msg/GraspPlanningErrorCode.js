// Auto-generated. Do not edit!

// (in-package manipulation_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class GraspPlanningErrorCode {
  constructor() {
    this.value = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GraspPlanningErrorCode
    // Serialize message field [value]
    bufferInfo = _serializer.int32(obj.value, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GraspPlanningErrorCode
    let tmp;
    let len;
    let data = new GraspPlanningErrorCode();
    // Deserialize message field [value]
    tmp = _deserializer.int32(buffer);
    data.value = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'manipulation_msgs/GraspPlanningErrorCode';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd0cbf262cc3d8075a46b994eef1bdb2a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Error codes for grasp and place planning
    
    # plan completed as expected
    int32 SUCCESS = 0
    
    # tf error encountered while transforming
    int32 TF_ERROR = 1 
    
    # some other error
    int32 OTHER_ERROR = 2
    
    # the actual value of this error code
    int32 value
    `;
  }

};

// Constants for message
GraspPlanningErrorCode.Constants = {
  SUCCESS: 0,
  TF_ERROR: 1,
  OTHER_ERROR: 2,
}

module.exports = GraspPlanningErrorCode;
