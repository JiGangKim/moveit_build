// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let DatabaseReturnCode = require('../msg/DatabaseReturnCode.js');
let shape_msgs = _finder('shape_msgs');

//-----------------------------------------------------------

class GetModelMeshRequest {
  constructor() {
    this.model_id = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelMeshRequest
    // Serialize message field [model_id]
    bufferInfo = _serializer.int32(obj.model_id, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelMeshRequest
    let tmp;
    let len;
    let data = new GetModelMeshRequest();
    // Deserialize message field [model_id]
    tmp = _deserializer.int32(buffer);
    data.model_id = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelMeshRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '28cb0598daf3b969068a38cd07aaa9f6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    int32 model_id
    
    
    `;
  }

};

class GetModelMeshResponse {
  constructor() {
    this.return_code = new DatabaseReturnCode();
    this.mesh = new shape_msgs.msg.Mesh();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelMeshResponse
    // Serialize message field [return_code]
    bufferInfo = DatabaseReturnCode.serialize(obj.return_code, bufferInfo);
    // Serialize message field [mesh]
    bufferInfo = shape_msgs.msg.Mesh.serialize(obj.mesh, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelMeshResponse
    let tmp;
    let len;
    let data = new GetModelMeshResponse();
    // Deserialize message field [return_code]
    tmp = DatabaseReturnCode.deserialize(buffer);
    data.return_code = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [mesh]
    tmp = shape_msgs.msg.Mesh.deserialize(buffer);
    data.mesh = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelMeshResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '350330c487efb062c09ffe1ab80683de';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    DatabaseReturnCode return_code
    
    
    shape_msgs/Mesh mesh
    
    
    ================================================================================
    MSG: household_objects_database_msgs/DatabaseReturnCode
    # return codes for database-related services
    
    int32 UNKNOWN_ERROR = 1
    int32 DATABASE_NOT_CONNECTED = 2
    int32 DATABASE_QUERY_ERROR = 3
    int32 SUCCESS = -1
    
    int32 code
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
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    `;
  }

};

module.exports = {
  Request: GetModelMeshRequest,
  Response: GetModelMeshResponse
};
