// Generated by gencpp from file household_objects_database_msgs/GetModelDescriptionResponse.msg
// DO NOT EDIT!


#ifndef HOUSEHOLD_OBJECTS_DATABASE_MSGS_MESSAGE_GETMODELDESCRIPTIONRESPONSE_H
#define HOUSEHOLD_OBJECTS_DATABASE_MSGS_MESSAGE_GETMODELDESCRIPTIONRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>

#include <household_objects_database_msgs/DatabaseReturnCode.h>

namespace household_objects_database_msgs
{
template <class ContainerAllocator>
struct GetModelDescriptionResponse_
{
  typedef GetModelDescriptionResponse_<ContainerAllocator> Type;

  GetModelDescriptionResponse_()
    : return_code()
    , tags()
    , name()
    , maker()  {
    }
  GetModelDescriptionResponse_(const ContainerAllocator& _alloc)
    : return_code(_alloc)
    , tags(_alloc)
    , name(_alloc)
    , maker(_alloc)  {
  (void)_alloc;
    }



   typedef  ::household_objects_database_msgs::DatabaseReturnCode_<ContainerAllocator>  _return_code_type;
  _return_code_type return_code;

   typedef std::vector<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > , typename ContainerAllocator::template rebind<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::other >  _tags_type;
  _tags_type tags;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _name_type;
  _name_type name;

   typedef std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other >  _maker_type;
  _maker_type maker;




  typedef boost::shared_ptr< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> const> ConstPtr;

}; // struct GetModelDescriptionResponse_

typedef ::household_objects_database_msgs::GetModelDescriptionResponse_<std::allocator<void> > GetModelDescriptionResponse;

typedef boost::shared_ptr< ::household_objects_database_msgs::GetModelDescriptionResponse > GetModelDescriptionResponsePtr;
typedef boost::shared_ptr< ::household_objects_database_msgs::GetModelDescriptionResponse const> GetModelDescriptionResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >::stream(s, "", v);
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
struct IsFixedSize< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct IsMessage< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "e6c55e34b143695104d37ad9b33c72c0";
  }

  static const char* value(const ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0xe6c55e34b1436951ULL;
  static const uint64_t static_value2 = 0x04d37ad9b33c72c0ULL;
};

template<class ContainerAllocator>
struct DataType< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "household_objects_database_msgs/GetModelDescriptionResponse";
  }

  static const char* value(const ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "\n\
\n\
DatabaseReturnCode return_code\n\
\n\
\n\
string[] tags\n\
\n\
\n\
string name\n\
\n\
\n\
string maker\n\
\n\
\n\
\n\
================================================================================\n\
MSG: household_objects_database_msgs/DatabaseReturnCode\n\
# return codes for database-related services\n\
\n\
int32 UNKNOWN_ERROR = 1\n\
int32 DATABASE_NOT_CONNECTED = 2\n\
int32 DATABASE_QUERY_ERROR = 3\n\
int32 SUCCESS = -1\n\
\n\
int32 code\n\
";
  }

  static const char* value(const ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.return_code);
      stream.next(m.tags);
      stream.next(m.name);
      stream.next(m.maker);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER;
  }; // struct GetModelDescriptionResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::household_objects_database_msgs::GetModelDescriptionResponse_<ContainerAllocator>& v)
  {
    s << indent << "return_code: ";
    s << std::endl;
    Printer< ::household_objects_database_msgs::DatabaseReturnCode_<ContainerAllocator> >::stream(s, indent + "  ", v.return_code);
    s << indent << "tags[]" << std::endl;
    for (size_t i = 0; i < v.tags.size(); ++i)
    {
      s << indent << "  tags[" << i << "]: ";
      Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.tags[i]);
    }
    s << indent << "name: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.name);
    s << indent << "maker: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename ContainerAllocator::template rebind<char>::other > >::stream(s, indent + "  ", v.maker);
  }
};

} // namespace message_operations
} // namespace ros

#endif // HOUSEHOLD_OBJECTS_DATABASE_MSGS_MESSAGE_GETMODELDESCRIPTIONRESPONSE_H
