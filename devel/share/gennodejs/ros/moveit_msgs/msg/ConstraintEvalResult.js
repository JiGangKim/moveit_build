// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class ConstraintEvalResult {
  constructor() {
    this.result = false;
    this.distance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ConstraintEvalResult
    // Serialize message field [result]
    bufferInfo = _serializer.bool(obj.result, bufferInfo);
    // Serialize message field [distance]
    bufferInfo = _serializer.float64(obj.distance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ConstraintEvalResult
    let tmp;
    let len;
    let data = new ConstraintEvalResult();
    // Deserialize message field [result]
    tmp = _deserializer.bool(buffer);
    data.result = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [distance]
    tmp = _deserializer.float64(buffer);
    data.distance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/ConstraintEvalResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '093643083d24f6488cb5a868bd47c090';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message contains result from constraint evaluation
    # result specifies the result of constraint evaluation 
    # (true indicates state satisfies constraint, false indicates state violates constraint)
    # if false, distance specifies a measure of the distance of the state from the constraint
    # if true, distance is set to zero
    bool result
    float64 distance
    
    `;
  }

};

module.exports = ConstraintEvalResult;
