file(REMOVE_RECURSE
  "moveit_benchmark_gui_automoc.cpp"
)

# Per-language clean rules from dependency scanning.
foreach(lang )
  include(CMakeFiles/doxygen.dir/cmake_clean_${lang}.cmake OPTIONAL)
endforeach()
