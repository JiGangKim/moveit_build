// Generated by gencpp from file manipulation_msgs/GraspResult.msg
// DO NOT EDIT!


#ifndef MANIPULATION_MSGS_MESSAGE_GRASPRESULT_H
#define MANIPULATION_MSGS_MESSAGE_GRASPRESULT_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace manipulation_msgs
{
template <class ContainerAllocator>
struct GraspResult_
{
  typedef GraspResult_<ContainerAllocator> Type;

  GraspResult_()
    : result_code(0)
    , continuation_possible(false)  {
    }
  GraspResult_(const ContainerAllocator& _alloc)
    : result_code(0)
    , continuation_possible(false)  {
  (void)_alloc;
    }



   typedef int32_t _result_code_type;
  _result_code_type result_code;

   typedef uint8_t _continuation_possible_type;
  _continuation_possible_type continuation_possible;


    enum { SUCCESS = 1 };
     enum { GRASP_OUT_OF_REACH = 2 };
     enum { GRASP_IN_COLLISION = 3 };
     enum { GRASP_UNFEASIBLE = 4 };
     enum { PREGRASP_OUT_OF_REACH = 5 };
     enum { PREGRASP_IN_COLLISION = 6 };
     enum { PREGRASP_UNFEASIBLE = 7 };
     enum { LIFT_OUT_OF_REACH = 8 };
     enum { LIFT_IN_COLLISION = 9 };
     enum { LIFT_UNFEASIBLE = 10 };
     enum { MOVE_ARM_FAILED = 11 };
     enum { GRASP_FAILED = 12 };
     enum { LIFT_FAILED = 13 };
     enum { RETREAT_FAILED = 14 };
 

  typedef boost::shared_ptr< ::manipulation_msgs::GraspResult_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::manipulation_msgs::GraspResult_<ContainerAllocator> const> ConstPtr;

}; // struct GraspResult_

typedef ::manipulation_msgs::GraspResult_<std::allocator<void> > GraspResult;

typedef boost::shared_ptr< ::manipulation_msgs::GraspResult > GraspResultPtr;
typedef boost::shared_ptr< ::manipulation_msgs::GraspResult const> GraspResultConstPtr;

// constants requiring out of line definition

   

   

   

   

   

   

   

   

   

   

   

   

   

   



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::manipulation_msgs::GraspResult_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::manipulation_msgs::GraspResult_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace manipulation_msgs

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'household_objects_database_msgs': ['/home/donghoonpark/moveit/src/household_objects_database_msgs/msg'], 'shape_msgs': ['/opt/ros/kinetic/share/shape_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'actionlib_msgs': ['/opt/ros/kinetic/share/actionlib_msgs/cmake/../msg'], 'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'object_recognition_msgs': ['/opt/ros/kinetic/share/object_recognition_msgs/cmake/../msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'manipulation_msgs': ['/home/donghoonpark/moveit/src/manipulation_msgs/msg', '/home/donghoonpark/moveit/devel_isolated/manipulation_msgs/share/manipulation_msgs/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::manipulation_msgs::GraspResult_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::manipulation_msgs::GraspResult_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::manipulation_msgs::GraspResult_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
{
  static const char* value()
  {
    return "c8a909da895cdddc0630aafd59848191";
  }

  static const char* value(const ::manipulation_msgs::GraspResult_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xc8a909da895cdddcULL;
  static const uint64_t static_value2 = 0x0630aafd59848191ULL;
};

template<class ContainerAllocator>
struct DataType< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
{
  static const char* value()
  {
    return "manipulation_msgs/GraspResult";
  }

  static const char* value(const ::manipulation_msgs::GraspResult_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
{
  static const char* value()
  {
    return "int32 SUCCESS = 1\n\
int32 GRASP_OUT_OF_REACH = 2\n\
int32 GRASP_IN_COLLISION = 3\n\
int32 GRASP_UNFEASIBLE = 4\n\
int32 PREGRASP_OUT_OF_REACH = 5\n\
int32 PREGRASP_IN_COLLISION = 6\n\
int32 PREGRASP_UNFEASIBLE = 7\n\
int32 LIFT_OUT_OF_REACH = 8\n\
int32 LIFT_IN_COLLISION = 9\n\
int32 LIFT_UNFEASIBLE = 10\n\
int32 MOVE_ARM_FAILED = 11\n\
int32 GRASP_FAILED = 12\n\
int32 LIFT_FAILED = 13\n\
int32 RETREAT_FAILED = 14\n\
int32 result_code\n\
\n\
# whether the state of the world was disturbed by this attempt. generally, this flag\n\
# shows if another task can be attempted, or a new sensed world model is recommeded\n\
# before proceeding\n\
bool continuation_possible\n\
";
  }

  static const char* value(const ::manipulation_msgs::GraspResult_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.result_code);
      stream.next(m.continuation_possible);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct GraspResult_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::manipulation_msgs::GraspResult_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::manipulation_msgs::GraspResult_<ContainerAllocator>& v)
  {
    s << indent << "result_code: ";
    Printer<int32_t>::stream(s, indent + "  ", v.result_code);
    s << indent << "continuation_possible: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.continuation_possible);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MANIPULATION_MSGS_MESSAGE_GRASPRESULT_H
