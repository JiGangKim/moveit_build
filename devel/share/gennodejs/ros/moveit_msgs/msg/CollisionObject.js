// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let shape_msgs = _finder('shape_msgs');
let geometry_msgs = _finder('geometry_msgs');
let object_recognition_msgs = _finder('object_recognition_msgs');

//-----------------------------------------------------------

class CollisionObject {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.id = '';
    this.type = new object_recognition_msgs.msg.ObjectType();
    this.primitives = [];
    this.primitive_poses = [];
    this.meshes = [];
    this.mesh_poses = [];
    this.planes = [];
    this.plane_poses = [];
    this.operation = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CollisionObject
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [type]
    bufferInfo = object_recognition_msgs.msg.ObjectType.serialize(obj.type, bufferInfo);
    // Serialize the length for message field [primitives]
    bufferInfo = _serializer.uint32(obj.primitives.length, bufferInfo);
    // Serialize message field [primitives]
    obj.primitives.forEach((val) => {
      bufferInfo = shape_msgs.msg.SolidPrimitive.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [primitive_poses]
    bufferInfo = _serializer.uint32(obj.primitive_poses.length, bufferInfo);
    // Serialize message field [primitive_poses]
    obj.primitive_poses.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Pose.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [meshes]
    bufferInfo = _serializer.uint32(obj.meshes.length, bufferInfo);
    // Serialize message field [meshes]
    obj.meshes.forEach((val) => {
      bufferInfo = shape_msgs.msg.Mesh.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [mesh_poses]
    bufferInfo = _serializer.uint32(obj.mesh_poses.length, bufferInfo);
    // Serialize message field [mesh_poses]
    obj.mesh_poses.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Pose.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [planes]
    bufferInfo = _serializer.uint32(obj.planes.length, bufferInfo);
    // Serialize message field [planes]
    obj.planes.forEach((val) => {
      bufferInfo = shape_msgs.msg.Plane.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [plane_poses]
    bufferInfo = _serializer.uint32(obj.plane_poses.length, bufferInfo);
    // Serialize message field [plane_poses]
    obj.plane_poses.forEach((val) => {
      bufferInfo = geometry_msgs.msg.Pose.serialize(val, bufferInfo);
    });
    // Serialize message field [operation]
    bufferInfo = _serializer.byte(obj.operation, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CollisionObject
    let tmp;
    let len;
    let data = new CollisionObject();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [type]
    tmp = object_recognition_msgs.msg.ObjectType.deserialize(buffer);
    data.type = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [primitives]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [primitives]
    data.primitives = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = shape_msgs.msg.SolidPrimitive.deserialize(buffer);
      data.primitives[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [primitive_poses]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [primitive_poses]
    data.primitive_poses = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Pose.deserialize(buffer);
      data.primitive_poses[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [meshes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [meshes]
    data.meshes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = shape_msgs.msg.Mesh.deserialize(buffer);
      data.meshes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [mesh_poses]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mesh_poses]
    data.mesh_poses = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Pose.deserialize(buffer);
      data.mesh_poses[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [planes]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [planes]
    data.planes = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = shape_msgs.msg.Plane.deserialize(buffer);
      data.planes[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [plane_poses]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [plane_poses]
    data.plane_poses = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = geometry_msgs.msg.Pose.deserialize(buffer);
      data.plane_poses[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize message field [operation]
    tmp = _deserializer.byte(buffer);
    data.operation = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/CollisionObject';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '568a161b26dc46c54a5a07621ce82cf3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # a header, used for interpreting the poses
    Header header
    
    # the id of the object (name used in MoveIt)
    string id
    
    # The object type in a database of known objects
    object_recognition_msgs/ObjectType type
    
    # the the collision geometries associated with the object;
    # their poses are with respect to the specified header
    
    # solid geometric primitives
    shape_msgs/SolidPrimitive[] primitives
    geometry_msgs/Pose[] primitive_poses
    
    # meshes
    shape_msgs/Mesh[] meshes
    geometry_msgs/Pose[] mesh_poses
    
    # bounding planes (equation is specified, but the plane can be oriented using an additional pose)
    shape_msgs/Plane[] planes
    geometry_msgs/Pose[] plane_poses
    
    # Adds the object to the planning scene. If the object previously existed, it is replaced.
    byte ADD=0
    
    # Removes the object from the environment entirely (everything that matches the specified id)
    byte REMOVE=1
    
    # Append to an object that already exists in the planning scene. If the does not exist, it is added.
    byte APPEND=2
    
    # If an object already exists in the scene, new poses can be sent (the geometry arrays must be left empty)
    # if solely moving the object is desired
    byte MOVE=3
    
    # Operation to be performed
    byte operation
    
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
    MSG: shape_msgs/SolidPrimitive
    # Define box, sphere, cylinder, cone 
    # All shapes are defined to have their bounding boxes centered around 0,0,0.
    
    uint8 BOX=1
    uint8 SPHERE=2
    uint8 CYLINDER=3
    uint8 CONE=4
    
    # The type of the shape
    uint8 type
    
    
    # The dimensions of the shape
    float64[] dimensions
    
    # The meaning of the shape dimensions: each constant defines the index in the 'dimensions' array
    
    # For the BOX type, the X, Y, and Z dimensions are the length of the corresponding
    # sides of the box.
    uint8 BOX_X=0
    uint8 BOX_Y=1
    uint8 BOX_Z=2
    
    
    # For the SPHERE type, only one component is used, and it gives the radius of
    # the sphere.
    uint8 SPHERE_RADIUS=0
    
    
    # For the CYLINDER and CONE types, the center line is oriented along
    # the Z axis.  Therefore the CYLINDER_HEIGHT (CONE_HEIGHT) component
    # of dimensions gives the height of the cylinder (cone).  The
    # CYLINDER_RADIUS (CONE_RADIUS) component of dimensions gives the
    # radius of the base of the cylinder (cone).  Cone and cylinder
    # primitives are defined to be circular. The tip of the cone is
    # pointing up, along +Z axis.
    
    uint8 CYLINDER_HEIGHT=0
    uint8 CYLINDER_RADIUS=1
    
    uint8 CONE_HEIGHT=0
    uint8 CONE_RADIUS=1
    
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
    
    ================================================================================
    MSG: shape_msgs/Mesh
    # Definition of a mesh
    
    # list of triangles; the index values refer to positions in vertices[]
    MeshTriangle[] triangles
    
    # the actual vertices that make up the mesh
    geometry_msgs/Point[] vertices
    
    ================================================================================
    MSG: shape_msgs/MeshTriangle
    # Definition of a triangle's vertices
    uint32[3] vertex_indices
    
    ================================================================================
    MSG: shape_msgs/Plane
    # Representation of a plane, using the plane equation ax + by + cz + d = 0
    
    # a := coef[0]
    # b := coef[1]
    # c := coef[2]
    # d := coef[3]
    
    float64[4] coef
    
    `;
  }

};

// Constants for message
CollisionObject.Constants = {
  ADD: 0,
  REMOVE: 1,
  APPEND: 2,
  MOVE: 3,
}

module.exports = CollisionObject;
