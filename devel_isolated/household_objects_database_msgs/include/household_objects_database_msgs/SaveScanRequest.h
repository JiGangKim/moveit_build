// Generated by gencpp from file household_objects_database_msgs/SaveScanRequest.msg
// DO NOT EDIT!


#ifndef HOUSEHOLD_OBJECTS_DATABASE_MSGS_MESSAGE_SAVESCANREQUEST_H
#define HOUSEHOLD_OBJECTS_DATABASE_MSGS_MESSAGE_SAVESCANREQUEST_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <geometry_msgs/PoseStamped.h>

namespace household_objects_database_msgs
{
template <class ContainerAllocator>
struct SaveScanRequest_
{
  typedef SaveScanRequest_<ContainerAllocator> Type;

  SaveScanRequest_()
    : scaled_model_id(0)
    , ground_truth_pose()
    , bagfile_location()
    , scan_source()
    , cloud_topic()  {
    }
  SaveScanRequest_(const ContainerAllocator& _alloc)
    : scaled_model_id(0)
    , ground_truth_pose(_alloc)
    , bagfile_location(_alloc)
    , scan_source(_alloc)
    , cloud_topic(_alloc)  {
  (void)_alloc;
    }



   typedef int32_t _scaled_model_id_type;
  _scaled_model_id_type scaled_model_id;

   typedef  ::geometry_msgs::PoseStamped_<ContainerAllocator>  _ground_truth_pose_type;
  _ground_truth_pose_type ground_truth_pose;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _bagfile_location_type;
  _bagfile_location_type bagfile_location;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _scan_source_type;
  _scan_source_type scan_source;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _cloud_topic_type;
  _cloud_topic_type cloud_topic;




  typedef boost::shared_ptr< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> const> ConstPtr;

}; // struct SaveScanRequest_

typedef ::household_objects_database_msgs::SaveScanRequest_<std::allocator<void> > SaveScanRequest;

typedef boost::shared_ptr< ::household_objects_database_msgs::SaveScanRequest > SaveScanRequestPtr;
typedef boost::shared_ptr< ::household_objects_database_msgs::SaveScanRequest const> SaveScanRequestConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace household_objects_database_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': False}
// {'household_objects_database_msgs': ['/home/donghoonpark/moveit/src/household_objects_database_msgs/msg'], 'shape_msgs': ['/opt/ros/kinetic/share/shape_msgs/cmake/../msg'], 'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'actionlib_msgs': ['/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'object_recognition_msgs': ['/opt/ros/kinetic/share/object_recognition_msgs/cmake/../msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "492f49d320aa26325df5fb078c297fa5";
  }

  static const char* value(const ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x492f49d320aa2632ULL;
  static const uint64_t static_value2 = 0x5df5fb078c297fa5ULL;
};

template<class ContainerAllocator>
struct DataType< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "household_objects_database_msgs/SaveScanRequest";
  }

  static const char* value(const ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n\
\n\
\n\
int32 scaled_model_id\n\
\n\
\n\
geometry_msgs/PoseStamped ground_truth_pose\n\
\n\
\n\
string bagfile_location\n\
\n\
\n\
string scan_source\n\
\n\
\n\
string cloud_topic\n\
\n\
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

  static const char* value(const ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.scaled_model_id);
      stream.next(m.ground_truth_pose);
      stream.next(m.bagfile_location);
      stream.next(m.scan_source);
      stream.next(m.cloud_topic);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct SaveScanRequest_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::household_objects_database_msgs::SaveScanRequest_<ContainerAllocator>& v)
  {
    s << indent << "scaled_model_id: ";
    Printer<int32_t>::stream(s, indent + "  ", v.scaled_model_id);
    s << indent << "ground_truth_pose: ";
    s << std::endl;
    Printer< ::geometry_msgs::PoseStamped_<ContainerAllocator> >::stream(s, indent + "  ", v.ground_truth_pose);
    s << indent << "bagfile_location: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.bagfile_location);
    s << indent << "scan_source: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.scan_source);
    s << indent << "cloud_topic: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.cloud_topic);
  }
};

} // namespace message_operations
} // namespace ros

#endif // HOUSEHOLD_OBJECTS_DATABASE_MSGS_MESSAGE_SAVESCANREQUEST_H
