// Generated by gencpp from file moveit_msgs/VisibilityConstraint.msg
// DO NOT EDIT!


#ifndef MOVEIT_MSGS_MESSAGE_VISIBILITYCONSTRAINT_H
#define MOVEIT_MSGS_MESSAGE_VISIBILITYCONSTRAINT_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <geometry_msgs/PoseStamped.h>
#include <geometry_msgs/PoseStamped.h>

namespace moveit_msgs
{
template <class ContainerAllocator>
struct VisibilityConstraint_
{
  typedef VisibilityConstraint_<ContainerAllocator> Type;

  VisibilityConstraint_()
    : target_radius(0.0)
    , target_pose()
    , cone_sides(0)
    , sensor_pose()
    , max_view_angle(0.0)
    , max_range_angle(0.0)
    , sensor_view_direction(0)
    , weight(0.0)  {
    }
  VisibilityConstraint_(const ContainerAllocator& _alloc)
    : target_radius(0.0)
    , target_pose(_alloc)
    , cone_sides(0)
    , sensor_pose(_alloc)
    , max_view_angle(0.0)
    , max_range_angle(0.0)
    , sensor_view_direction(0)
    , weight(0.0)  {
  (void)_alloc;
    }



   typedef double _target_radius_type;
  _target_radius_type target_radius;

   typedef  ::geometry_msgs::PoseStamped_<ContainerAllocator>  _target_pose_type;
  _target_pose_type target_pose;

   typedef int32_t _cone_sides_type;
  _cone_sides_type cone_sides;

   typedef  ::geometry_msgs::PoseStamped_<ContainerAllocator>  _sensor_pose_type;
  _sensor_pose_type sensor_pose;

   typedef double _max_view_angle_type;
  _max_view_angle_type max_view_angle;

   typedef double _max_range_angle_type;
  _max_range_angle_type max_range_angle;

   typedef uint8_t _sensor_view_direction_type;
  _sensor_view_direction_type sensor_view_direction;

   typedef double _weight_type;
  _weight_type weight;


    enum { SENSOR_Z = 0u };
     enum { SENSOR_Y = 1u };
     enum { SENSOR_X = 2u };
 

  typedef boost::shared_ptr< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> const> ConstPtr;

}; // struct VisibilityConstraint_

typedef ::moveit_msgs::VisibilityConstraint_<std::allocator<void> > VisibilityConstraint;

typedef boost::shared_ptr< ::moveit_msgs::VisibilityConstraint > VisibilityConstraintPtr;
typedef boost::shared_ptr< ::moveit_msgs::VisibilityConstraint const> VisibilityConstraintConstPtr;

// constants requiring out of line definition

   

   

   



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace moveit_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'shape_msgs': ['/opt/ros/kinetic/share/shape_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'moveit_msgs': ['/home/donghoonpark/moveit/devel/share/moveit_msgs/msg', '/home/donghoonpark/moveit/src/moveit_msgs/msg'], 'trajectory_msgs': ['/opt/ros/kinetic/share/trajectory_msgs/cmake/../msg'], 'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'object_recognition_msgs': ['/opt/ros/kinetic/share/object_recognition_msgs/cmake/../msg'], 'octomap_msgs': ['/opt/ros/kinetic/share/octomap_msgs/cmake/../msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'actionlib_msgs': ['/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
{
  static const char* value()
  {
    return "62cda903bfe31ff2e5fcdc3810d577ad";
  }

  static const char* value(const ::moveit_msgs::VisibilityConstraint_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x62cda903bfe31ff2ULL;
  static const uint64_t static_value2 = 0xe5fcdc3810d577adULL;
};

template<class ContainerAllocator>
struct DataType< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
{
  static const char* value()
  {
    return "moveit_msgs/VisibilityConstraint";
  }

  static const char* value(const ::moveit_msgs::VisibilityConstraint_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
{
  static const char* value()
  {
    return "# The constraint is useful to maintain visibility to a disc (the target) in a particular frame.\n\
# This disc forms the base of a visibiliy cone whose tip is at the origin of the sensor.\n\
# Maintaining visibility is done by ensuring the robot does not obstruct the visibility cone.\n\
# Note:\n\
# This constraint does NOT enforce minimum or maximum distances between the sensor\n\
# and the target, nor does it enforce the target to be in the field of view of\n\
# the sensor. A PositionConstraint can (and probably should) be used for such purposes.\n\
\n\
# The radius of the disc that should be maintained visible \n\
float64 target_radius\n\
\n\
# The pose of the disc; as the robot moves, the pose of the disc may change as well\n\
# This can be in the frame of a particular robot link, for example\n\
geometry_msgs/PoseStamped target_pose\n\
\n\
# From the sensor origin towards the target, the disc forms a visibility cone\n\
# This cone is approximated using many sides. For example, when using 4 sides, \n\
# that in fact makes the visibility region be a pyramid.\n\
# This value should always be 3 or more.\n\
int32 cone_sides\n\
\n\
# The pose in which visibility is to be maintained.\n\
# The frame id should represent the robot link to which the sensor is attached.\n\
# It is assumed the sensor can look directly at the target, in any direction.\n\
# This assumption is usually not true, but additional PositionConstraints\n\
# can resolve this issue.\n\
geometry_msgs/PoseStamped sensor_pose\n\
\n\
# Even though the disc is maintained visible, the visibility cone can be very small\n\
# because of the orientation of the disc with respect to the sensor. It is possible\n\
# for example to view the disk almost from a side, in which case the visibility cone \n\
# can end up having close to 0 volume. The view angle is defined to be the angle between\n\
# the normal to the visibility disc and the direction vector from the sensor origin.\n\
# The value below represents the minimum desired view angle. For a perfect view,\n\
# this value will be 0 (the two vectors are exact opposites). For a completely obstructed view\n\
# this value will be Pi/2 (the vectors are perpendicular). This value defined below \n\
# is the maximum view angle to be maintained. This should be a value in the open interval\n\
# (0, Pi/2). If 0 is set, the view angle is NOT enforced.\n\
float64 max_view_angle\n\
\n\
# This angle is used similarly to max_view_angle but limits the maximum angle\n\
# between the sensor origin direction vector and the axis that connects the\n\
# sensor origin to the target frame origin. The value is again in the range (0, Pi/2)\n\
# and is NOT enforced if set to 0.\n\
float64 max_range_angle\n\
\n\
# The axis that is assumed to indicate the direction of view for the sensor\n\
# X = 2, Y = 1, Z = 0\n\
uint8 SENSOR_Z=0\n\
uint8 SENSOR_Y=1\n\
uint8 SENSOR_X=2\n\
uint8 sensor_view_direction\n\
\n\
# A weighting factor for this constraint (denotes relative importance to other constraints. Closer to zero means less important)\n\
float64 weight\n\
\n\
================================================================================\n\
MSG: geometry_msgs/PoseStamped\n\
# A Pose with reference coordinate frame and timestamp\n\
Header header\n\
Pose pose\n\
\n\
================================================================================\n\
MSG: std_msgs/Header\n\
# Standard metadata for higher-level stamped data types.\n\
# This is generally used to communicate timestamped data \n\
# in a particular coordinate frame.\n\
# \n\
# sequence ID: consecutively increasing ID \n\
uint32 seq\n\
#Two-integer timestamp that is expressed as:\n\
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')\n\
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')\n\
# time-handling sugar is provided by the client library\n\
time stamp\n\
#Frame this data is associated with\n\
# 0: no frame\n\
# 1: global frame\n\
string frame_id\n\
\n\
================================================================================\n\
MSG: geometry_msgs/Pose\n\
# A representation of pose in free space, composed of postion and orientation. \n\
Point position\n\
Quaternion orientation\n\
\n\
================================================================================\n\
MSG: geometry_msgs/Point\n\
# This contains the position of a point in free space\n\
float64 x\n\
float64 y\n\
float64 z\n\
\n\
================================================================================\n\
MSG: geometry_msgs/Quaternion\n\
# This represents an orientation in free space in quaternion form.\n\
\n\
float64 x\n\
float64 y\n\
float64 z\n\
float64 w\n\
";
  }

  static const char* value(const ::moveit_msgs::VisibilityConstraint_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.target_radius);
      stream.next(m.target_pose);
      stream.next(m.cone_sides);
      stream.next(m.sensor_pose);
      stream.next(m.max_view_angle);
      stream.next(m.max_range_angle);
      stream.next(m.sensor_view_direction);
      stream.next(m.weight);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct VisibilityConstraint_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::moveit_msgs::VisibilityConstraint_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::moveit_msgs::VisibilityConstraint_<ContainerAllocator>& v)
  {
    s << indent << "target_radius: ";
    Printer<double>::stream(s, indent + "  ", v.target_radius);
    s << indent << "target_pose: ";
    s << std::endl;
    Printer< ::geometry_msgs::PoseStamped_<ContainerAllocator> >::stream(s, indent + "  ", v.target_pose);
    s << indent << "cone_sides: ";
    Printer<int32_t>::stream(s, indent + "  ", v.cone_sides);
    s << indent << "sensor_pose: ";
    s << std::endl;
    Printer< ::geometry_msgs::PoseStamped_<ContainerAllocator> >::stream(s, indent + "  ", v.sensor_pose);
    s << indent << "max_view_angle: ";
    Printer<double>::stream(s, indent + "  ", v.max_view_angle);
    s << indent << "max_range_angle: ";
    Printer<double>::stream(s, indent + "  ", v.max_range_angle);
    s << indent << "sensor_view_direction: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.sensor_view_direction);
    s << indent << "weight: ";
    Printer<double>::stream(s, indent + "  ", v.weight);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MOVEIT_MSGS_MESSAGE_VISIBILITYCONSTRAINT_H
