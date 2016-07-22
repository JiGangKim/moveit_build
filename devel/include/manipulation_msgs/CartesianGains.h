// Generated by gencpp from file manipulation_msgs/CartesianGains.msg
// DO NOT EDIT!


#ifndef MANIPULATION_MSGS_MESSAGE_CARTESIANGAINS_H
#define MANIPULATION_MSGS_MESSAGE_CARTESIANGAINS_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <std_msgs/Header.h>

namespace manipulation_msgs
{
template <class ContainerAllocator>
struct CartesianGains_
{
  typedef CartesianGains_<ContainerAllocator> Type;

  CartesianGains_()
    : header()
    , gains()
    , fixed_frame()  {
    }
  CartesianGains_(const ContainerAllocator& _alloc)
    : header(_alloc)
    , gains(_alloc)
    , fixed_frame(_alloc)  {
  (void)_alloc;
    }



   typedef  ::std_msgs::Header_<ContainerAllocator>  _header_type;
  _header_type header;

   typedef std::vector<double, typename ContainerAllocator::template rebind<double>::other >  _gains_type;
  _gains_type gains;

   typedef std::vector<double, typename ContainerAllocator::template rebind<double>::other >  _fixed_frame_type;
  _fixed_frame_type fixed_frame;




  typedef boost::shared_ptr< ::manipulation_msgs::CartesianGains_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::manipulation_msgs::CartesianGains_<ContainerAllocator> const> ConstPtr;

}; // struct CartesianGains_

typedef ::manipulation_msgs::CartesianGains_<std::allocator<void> > CartesianGains;

typedef boost::shared_ptr< ::manipulation_msgs::CartesianGains > CartesianGainsPtr;
typedef boost::shared_ptr< ::manipulation_msgs::CartesianGains const> CartesianGainsConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::manipulation_msgs::CartesianGains_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace manipulation_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': False, 'IsMessage': True, 'HasHeader': True}
// {'household_objects_database_msgs': ['/home/donghoonpark/moveit/src/household_objects_database_msgs/msg'], 'shape_msgs': ['/opt/ros/kinetic/share/shape_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'actionlib_msgs': ['/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg'], 'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'object_recognition_msgs': ['/opt/ros/kinetic/share/object_recognition_msgs/cmake/../msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'manipulation_msgs': ['/home/donghoonpark/moveit/src/manipulation_msgs/msg', '/home/donghoonpark/moveit/devel/share/manipulation_msgs/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::manipulation_msgs::CartesianGains_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::manipulation_msgs::CartesianGains_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::manipulation_msgs::CartesianGains_<ContainerAllocator> const>
  : TrueType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
{
  static const char* value()
  {
    return "ab347f046ca5736a156ec424cbb63635";
  }

  static const char* value(const ::manipulation_msgs::CartesianGains_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xab347f046ca5736aULL;
  static const uint64_t static_value2 = 0x156ec424cbb63635ULL;
};

template<class ContainerAllocator>
struct DataType< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
{
  static const char* value()
  {
    return "manipulation_msgs/CartesianGains";
  }

  static const char* value(const ::manipulation_msgs::CartesianGains_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
{
  static const char* value()
  {
    return "Header header\n\
\n\
float64[] gains\n\
float64[] fixed_frame\n\
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
";
  }

  static const char* value(const ::manipulation_msgs::CartesianGains_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.header);
      stream.next(m.gains);
      stream.next(m.fixed_frame);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct CartesianGains_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::manipulation_msgs::CartesianGains_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::manipulation_msgs::CartesianGains_<ContainerAllocator>& v)
  {
    s << indent << "header: ";
    s << std::endl;
    Printer< ::std_msgs::Header_<ContainerAllocator> >::stream(s, indent + "  ", v.header);
    s << indent << "gains[]" << std::endl;
    for (size_t i = 0; i < v.gains.size(); ++i)
    {
      s << indent << "  gains[" << i << "]: ";
      Printer<double>::stream(s, indent + "  ", v.gains[i]);
    }
    s << indent << "fixed_frame[]" << std::endl;
    for (size_t i = 0; i < v.fixed_frame.size(); ++i)
    {
      s << indent << "  fixed_frame[" << i << "]: ";
      Printer<double>::stream(s, indent + "  ", v.fixed_frame[i]);
    }
  }
};

} // namespace message_operations
} // namespace ros

#endif // MANIPULATION_MSGS_MESSAGE_CARTESIANGAINS_H
