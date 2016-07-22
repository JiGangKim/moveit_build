// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let shape_msgs = _finder('shape_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class BoundingVolume {
  constructor() {
    this.primitives = [];
    this.primitive_poses = [];
    this.meshes = [];
    this.mesh_poses = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type BoundingVolume
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
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type BoundingVolume
    let tmp;
    let len;
    let data = new BoundingVolume();
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
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/BoundingVolume';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '22db94010f39e9198032cb4a1aeda26e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Define a volume in 3D
    
    # A set of solid geometric primitives that make up the volume to define (as a union)
    shape_msgs/SolidPrimitive[] primitives
    
    # The poses at which the primitives are located
    geometry_msgs/Pose[] primitive_poses
    
    # In addition to primitives, meshes can be specified to add to the bounding volume (again, as union)
    shape_msgs/Mesh[] meshes
    
    # The poses at which the meshes are located
    geometry_msgs/Pose[] mesh_poses
    
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
    
    `;
  }

};

module.exports = BoundingVolume;
