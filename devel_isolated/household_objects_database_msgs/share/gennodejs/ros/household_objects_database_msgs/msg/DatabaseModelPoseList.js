// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let DatabaseModelPose = require('./DatabaseModelPose.js');

//-----------------------------------------------------------

class DatabaseModelPoseList {
  constructor() {
    this.model_list = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DatabaseModelPoseList
    // Serialize the length for message field [model_list]
    bufferInfo = _serializer.uint32(obj.model_list.length, bufferInfo);
    // Serialize message field [model_list]
    obj.model_list.forEach((val) => {
      bufferInfo = DatabaseModelPose.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DatabaseModelPoseList
    let tmp;
    let len;
    let data = new DatabaseModelPoseList();
    // Deserialize array length for message field [model_list]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [model_list]
    data.model_list = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = DatabaseModelPose.deserialize(buffer);
      data.model_list[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'household_objects_database_msgs/DatabaseModelPoseList';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f0bb2aa8d2ededee0ffe0f5d2107e099';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # stores a list of possible database models recognition results
    DatabaseModelPose[] model_list
    ================================================================================
    MSG: household_objects_database_msgs/DatabaseModelPose
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

module.exports = DatabaseModelPoseList;
