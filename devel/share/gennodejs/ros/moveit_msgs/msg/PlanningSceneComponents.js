// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PlanningSceneComponents {
  constructor() {
    this.components = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlanningSceneComponents
    // Serialize message field [components]
    bufferInfo = _serializer.uint32(obj.components, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PlanningSceneComponents
    let tmp;
    let len;
    let data = new PlanningSceneComponents();
    // Deserialize message field [components]
    tmp = _deserializer.uint32(buffer);
    data.components = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/PlanningSceneComponents';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'bc993e784476960b918b6e7ad5bb58ce';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message defines the components that make up the PlanningScene message.
    # The values can be used as a bitfield to specify which parts of the PlanningScene message
    # are of interest
    
    # Scene name, model name, model root
    uint32 SCENE_SETTINGS=1
    
    # Joint values of the robot state
    uint32 ROBOT_STATE=2
    
    # Attached objects (including geometry) for the robot state
    uint32 ROBOT_STATE_ATTACHED_OBJECTS=4
    
    # The names of the world objects
    uint32 WORLD_OBJECT_NAMES=8
    
    # The geometry of the world objects
    uint32 WORLD_OBJECT_GEOMETRY=16
    
    # The maintained octomap 
    uint32 OCTOMAP=32
    
    # The maintained list of transforms
    uint32 TRANSFORMS=64
    
    # The allowed collision matrix
    uint32 ALLOWED_COLLISION_MATRIX=128
    
    # The default link padding and link scaling
    uint32 LINK_PADDING_AND_SCALING=256
    
    # The stored object colors
    uint32 OBJECT_COLORS=512
    
    # Bitfield combining options indicated above
    uint32 components
    
    `;
  }

};

// Constants for message
PlanningSceneComponents.Constants = {
  SCENE_SETTINGS: 1,
  ROBOT_STATE: 2,
  ROBOT_STATE_ATTACHED_OBJECTS: 4,
  WORLD_OBJECT_NAMES: 8,
  WORLD_OBJECT_GEOMETRY: 16,
  OCTOMAP: 32,
  TRANSFORMS: 64,
  ALLOWED_COLLISION_MATRIX: 128,
  LINK_PADDING_AND_SCALING: 256,
  OBJECT_COLORS: 512,
}

module.exports = PlanningSceneComponents;
