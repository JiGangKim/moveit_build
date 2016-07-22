# -*- coding: utf-8 -*-
from __future__ import print_function
import argparse
import os
import stat
import sys

# find the import for catkin's python package - either from source space or from an installed underlay
if os.path.exists(os.path.join('/opt/ros/kinetic/share/catkin/cmake', 'catkinConfig.cmake.in')):
    sys.path.insert(0, os.path.join('/opt/ros/kinetic/share/catkin/cmake', '..', 'python'))
try:
    from catkin.environment_cache import generate_environment_script
except ImportError:
    # search for catkin package in all workspaces and prepend to path
    for workspace in "/home/donghoonpark/moveit/devel_isolated/moveit_ros_warehouse;/home/donghoonpark/moveit/devel_isolated/warehouse_ros;/home/donghoonpark/moveit/devel_isolated/moveit_ros_control_interface;/home/donghoonpark/moveit/devel_isolated/moveit_simple_controller_manager;/home/donghoonpark/moveit/devel_isolated/moveit_ros_robot_interaction;/home/donghoonpark/moveit/devel_isolated/moveit_ros_manipulation;/home/donghoonpark/moveit/devel_isolated/moveit_ros_move_group;/home/donghoonpark/moveit/devel_isolated/moveit_planners_ompl;/home/donghoonpark/moveit/devel_isolated/moveit_fake_controller_manager;/home/donghoonpark/moveit/devel_isolated/moveit_ros_planning;/home/donghoonpark/moveit/devel_isolated/moveit_ros_perception;/home/donghoonpark/moveit/devel_isolated/moveit_controller_manager_example;/home/donghoonpark/moveit/devel_isolated/moveit_core;/home/donghoonpark/moveit/devel_isolated/srdfdom;/home/donghoonpark/moveit/devel_isolated/moveit_ros;/home/donghoonpark/moveit/devel_isolated/moveit_resources;/home/donghoonpark/moveit/devel_isolated/moveit_plugins;/home/donghoonpark/moveit/devel_isolated/moveit_planners;/home/donghoonpark/moveit/devel_isolated/moveit_msgs;/home/donghoonpark/moveit/devel_isolated/manipulation_msgs;/home/donghoonpark/moveit/devel_isolated/household_objects_database_msgs;/home/donghoonpark/catkin_workspace/install;/opt/ros/kinetic".split(';'):
        python_path = os.path.join(workspace, 'lib/python2.7/dist-packages')
        if os.path.isdir(os.path.join(python_path, 'catkin')):
            sys.path.insert(0, python_path)
            break
    from catkin.environment_cache import generate_environment_script

code = generate_environment_script('/home/donghoonpark/moveit/devel_isolated/moveit_ros_benchmarks/env.sh')

output_filename = '/home/donghoonpark/moveit/build_isolated/moveit_ros_benchmarks/catkin_generated/setup_cached.sh'
with open(output_filename, 'w') as f:
    #print('Generate script for cached setup "%s"' % output_filename)
    f.write('\n'.join(code))

mode = os.stat(output_filename).st_mode
os.chmod(output_filename, mode | stat.S_IXUSR)
