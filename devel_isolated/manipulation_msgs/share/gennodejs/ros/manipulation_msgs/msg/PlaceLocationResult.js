// Auto-generated. Do not edit!

// (in-package manipulation_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PlaceLocationResult {
  constructor() {
    this.result_code = 0;
    this.continuation_possible = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlaceLocationResult
    // Serialize message field [result_code]
    bufferInfo = _serializer.int32(obj.result_code, bufferInfo);
    // Serialize message field [continuation_possible]
    bufferInfo = _serializer.bool(obj.continuation_possible, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PlaceLocationResult
    let tmp;
    let len;
    let data = new PlaceLocationResult();
    // Deserialize message field [result_code]
    tmp = _deserializer.int32(buffer);
    data.result_code = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [continuation_possible]
    tmp = _deserializer.bool(buffer);
    data.continuation_possible = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'manipulation_msgs/PlaceLocationResult';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8dd9edc3a2a98cab298ca81031224cda';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 SUCCESS = 1
    int32 PLACE_OUT_OF_REACH = 2
    int32 PLACE_IN_COLLISION = 3
    int32 PLACE_UNFEASIBLE = 4
    int32 PREPLACE_OUT_OF_REACH = 5
    int32 PREPLACE_IN_COLLISION = 6
    int32 PREPLACE_UNFEASIBLE = 7
    int32 RETREAT_OUT_OF_REACH = 8
    int32 RETREAT_IN_COLLISION = 9
    int32 RETREAT_UNFEASIBLE = 10
    int32 MOVE_ARM_FAILED = 11
    int32 PLACE_FAILED = 12
    int32 RETREAT_FAILED = 13
    int32 result_code
    
    # whether the state of the world was disturbed by this attempt. generally, this flag
    # shows if another task can be attempted, or a new sensed world model is recommeded
    # before proceeding
    bool continuation_possible
    
    `;
  }

};

// Constants for message
PlaceLocationResult.Constants = {
  SUCCESS: 1,
  PLACE_OUT_OF_REACH: 2,
  PLACE_IN_COLLISION: 3,
  PLACE_UNFEASIBLE: 4,
  PREPLACE_OUT_OF_REACH: 5,
  PREPLACE_IN_COLLISION: 6,
  PREPLACE_UNFEASIBLE: 7,
  RETREAT_OUT_OF_REACH: 8,
  RETREAT_IN_COLLISION: 9,
  RETREAT_UNFEASIBLE: 10,
  MOVE_ARM_FAILED: 11,
  PLACE_FAILED: 12,
  RETREAT_FAILED: 13,
}

module.exports = PlaceLocationResult;
