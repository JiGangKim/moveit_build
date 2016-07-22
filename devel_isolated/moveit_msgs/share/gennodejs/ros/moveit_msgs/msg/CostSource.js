// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class CostSource {
  constructor() {
    this.cost_density = 0.0;
    this.aabb_min = new geometry_msgs.msg.Vector3();
    this.aabb_max = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CostSource
    // Serialize message field [cost_density]
    bufferInfo = _serializer.float64(obj.cost_density, bufferInfo);
    // Serialize message field [aabb_min]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.aabb_min, bufferInfo);
    // Serialize message field [aabb_max]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.aabb_max, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CostSource
    let tmp;
    let len;
    let data = new CostSource();
    // Deserialize message field [cost_density]
    tmp = _deserializer.float64(buffer);
    data.cost_density = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [aabb_min]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.aabb_min = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [aabb_max]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.aabb_max = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/CostSource';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'abb7e013237dacaaa8b97e704102f908';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The density of the cost source
    float64 cost_density
    
    # The volume of the cost source is represented as an
    # axis-aligned bounding box (AABB)
    # The AABB is specified by two of its opposite corners
    
    geometry_msgs/Vector3 aabb_min
    
    geometry_msgs/Vector3 aabb_max
    
    ================================================================================
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = CostSource;
