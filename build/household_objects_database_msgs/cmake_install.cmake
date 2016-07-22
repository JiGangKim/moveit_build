# Install script for directory: /home/donghoonpark/moveit/src/household_objects_database_msgs

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/donghoonpark/moveit/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/household_objects_database_msgs/msg" TYPE FILE FILES
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/msg/DatabaseModelPoseList.msg"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/msg/DatabaseModelPose.msg"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/msg/DatabaseReturnCode.msg"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/msg/DatabaseScan.msg"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/household_objects_database_msgs/srv" TYPE FILE FILES
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/srv/GetModelDescription.srv"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/srv/GetModelList.srv"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/srv/GetModelMesh.srv"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/srv/GetModelScans.srv"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/srv/SaveScan.srv"
    "/home/donghoonpark/moveit/src/household_objects_database_msgs/srv/TranslateRecognitionId.srv"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/household_objects_database_msgs/cmake" TYPE FILE FILES "/home/donghoonpark/moveit/build/household_objects_database_msgs/catkin_generated/installspace/household_objects_database_msgs-msg-paths.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/donghoonpark/moveit/devel/include/household_objects_database_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "/home/donghoonpark/moveit/devel/share/roseus/ros/household_objects_database_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "/home/donghoonpark/moveit/devel/share/common-lisp/ros/household_objects_database_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "/home/donghoonpark/moveit/devel/share/gennodejs/ros/household_objects_database_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  execute_process(COMMAND "/usr/bin/python" -m compileall "/home/donghoonpark/moveit/devel/lib/python2.7/dist-packages/household_objects_database_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python2.7/dist-packages" TYPE DIRECTORY FILES "/home/donghoonpark/moveit/devel/lib/python2.7/dist-packages/household_objects_database_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/donghoonpark/moveit/build/household_objects_database_msgs/catkin_generated/installspace/household_objects_database_msgs.pc")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/household_objects_database_msgs/cmake" TYPE FILE FILES "/home/donghoonpark/moveit/build/household_objects_database_msgs/catkin_generated/installspace/household_objects_database_msgs-msg-extras.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/household_objects_database_msgs/cmake" TYPE FILE FILES
    "/home/donghoonpark/moveit/build/household_objects_database_msgs/catkin_generated/installspace/household_objects_database_msgsConfig.cmake"
    "/home/donghoonpark/moveit/build/household_objects_database_msgs/catkin_generated/installspace/household_objects_database_msgsConfig-version.cmake"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/household_objects_database_msgs" TYPE FILE FILES "/home/donghoonpark/moveit/src/household_objects_database_msgs/package.xml")
endif()

