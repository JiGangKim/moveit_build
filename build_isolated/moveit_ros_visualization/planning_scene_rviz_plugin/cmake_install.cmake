# Install script for directory: /home/donghoonpark/moveit/src/moveit_ros/visualization/planning_scene_rviz_plugin

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/donghoonpark/moveit/install_isolated")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Release")
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
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/donghoonpark/moveit/src/moveit_ros/visualization/planning_scene_rviz_plugin/include/")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so")
    file(RPATH_CHECK
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so"
         RPATH "")
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES "/home/donghoonpark/moveit/devel_isolated/moveit_ros_visualization/lib/libmoveit_planning_scene_rviz_plugin_core.so")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so")
    file(RPATH_CHANGE
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so"
         OLD_RPATH "/home/donghoonpark/moveit/devel_isolated/moveit_ros_planning_interface/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_warehouse/lib:/home/donghoonpark/moveit/devel_isolated/warehouse_ros/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_robot_interaction/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_manipulation/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_move_group/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_planning/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_perception/lib:/home/donghoonpark/moveit/devel_isolated/moveit_core/lib:/home/donghoonpark/moveit/devel_isolated/srdfdom/lib:/opt/ros/kinetic/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_visualization/lib:"
         NEW_RPATH "")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin_core.so")
    endif()
  endif()
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so")
    file(RPATH_CHECK
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so"
         RPATH "")
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES "/home/donghoonpark/moveit/devel_isolated/moveit_ros_visualization/lib/libmoveit_planning_scene_rviz_plugin.so")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so")
    file(RPATH_CHANGE
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so"
         OLD_RPATH "/home/donghoonpark/moveit/devel_isolated/moveit_ros_planning_interface/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_warehouse/lib:/home/donghoonpark/moveit/devel_isolated/warehouse_ros/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_robot_interaction/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_manipulation/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_move_group/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_planning/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_perception/lib:/home/donghoonpark/moveit/devel_isolated/moveit_core/lib:/home/donghoonpark/moveit/devel_isolated/srdfdom/lib:/opt/ros/kinetic/lib:/home/donghoonpark/moveit/devel_isolated/moveit_ros_visualization/lib:"
         NEW_RPATH "")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libmoveit_planning_scene_rviz_plugin.so")
    endif()
  endif()
endif()

