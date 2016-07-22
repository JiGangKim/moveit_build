#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
    DESTDIR_ARG="--root=$DESTDIR"
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/donghoonpark/moveit/src/moveit_ros/visualization"

# snsure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/donghoonpark/moveit/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/donghoonpark/moveit/install/lib/python2.7/dist-packages:/home/donghoonpark/moveit/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/donghoonpark/moveit/build" \
    "/usr/bin/python" \
    "/home/donghoonpark/moveit/src/moveit_ros/visualization/setup.py" \
    build --build-base "/home/donghoonpark/moveit/build/moveit_ros/visualization" \
    install \
    $DESTDIR_ARG \
    --install-layout=deb --prefix="/home/donghoonpark/moveit/install" --install-scripts="/home/donghoonpark/moveit/install/bin"
