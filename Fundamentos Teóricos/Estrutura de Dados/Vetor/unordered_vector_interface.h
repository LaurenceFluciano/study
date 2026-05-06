#ifndef UNORDERED_VECTORS_INTERFACE
#define UNORDERED_VECTORS_INTERFACE

#define UnorderedVector(type, name, capacity) \
    type* name##_storage; \
    UnorderedVectors name; \
    do { \
        name##_storage = malloc(sizeof(type) * (capacity)); \
        UnorderedVectors_Setup(&name, capacity, sizeof(type)); \
    } while (0)

#endif