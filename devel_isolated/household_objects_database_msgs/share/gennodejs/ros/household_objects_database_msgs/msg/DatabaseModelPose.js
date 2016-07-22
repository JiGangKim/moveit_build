// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');
let object_recognition_msgs = _finder('object_recognition_msgs');

//-----------------------------------------------------------

class DatabaseModelPose {
  constructor() {
    this.model_id = 0;
    this.type = new object_recognition_msgs.msg.ObjectType();
    this.pose = new geometry_msgs.msg.PoseStamped();
    this.confidence = 0.0;
    this.detector_name = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DatabaseModelPose
    // Serialize message field [model_id]
    bufferInfo = _serializer.int32(obj.model_id, bufferInfo);
    // Serialize message field [type]
    bufferInfo = object_recognition_msgs.msg.ObjectType.serialize(obj.type, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.pose, bufferInfo);
    // Serialize message field [confidence]
    bufferInfo = _serializer.float32(obj.confidence, bufferInfo);
    // Serialize message field [detector_name]
    bufferInfo = _serializer.string(obj.detector_name, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DatabaseModelPose
    let tmp;
    let len;
    let data = new DatabaseModelPose();
    // Deserialize message field [model_id]
    tmp = _deserializer.int32(buffer);
    data.model_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = object_recognition_msgs.msg.ObjectType.deserialize(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [confidence]
    tmp = _deserializer.float32(buffer);
    data.confidence = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [detector_name]
    tmp = _deserializer.string(buffer);
    data.detector_name = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'household_objects_database_msgs/DatabaseModelPose';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6bc39ef48ca57cc7d4341cfc13a5a110';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Informs that a specific model from the Model Database has been 
    # identified at a certain location
    
    # the database id of the model
    int32 model_id
    
    # if the object was recognized by the ORK pipeline, its type will be in here
    # if this is not empty, then the string in here will be converted to a household_objects_database id
    # leave this empty if providing an id in the model_id field
    object_recognition_msgs/ObjectType type
    
    # the pose that it can be found in
    geometry_msgs/PoseStamped pose
    
    # a measure of the confidence level in this detection result
    float32 confidence
    
    # the name of the object detector that generated this detection result
    string detector_name
    
    ================================================================================
    MSG: object_recognition_msgs/ObjectType
    ################################################## OBJECT ID #########################################################
    
    # Contains information about the type of a found object. Those two sets of parameters together uniquely define an
    # object
    
    # The key of the found object: the unique identifier in the given db
    string key
    
    # The db parameters stored as a JSON/compressed YAML string. An object id does not make sense without the corresponding
    # database. E.g., in object_recognition, it can look like: "{'type':'CouchDB', 'root':'http://localhost'}"
    # There is no conventional format for those parameters and it's nice to keep that flexibility.
    # The object_recognition_core as a generic DB type that can read those fields
    # Current examples:
    # For CouchDB:
    #   type: 'CouchDB'
    #   root: 'http://localhost:5984'
    #   collection: 'object_recognition'
    # For SQL household database:
    #   type: 'SqlHousehold'
    #   host: 'wgs36'
    #   port: 5432
    #   user: 'willow'
    #   password: 'willow'
    #   name: 'household_objects'
    #   module: 'tabletop'
    string db
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of postion and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = DatabaseModelPose;
