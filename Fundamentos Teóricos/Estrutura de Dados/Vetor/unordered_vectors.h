#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>

/**
 * Estimed Size: 116 bytes.
 * so much control var.
 */

#ifndef UNORDERED_VECTORS
#define UNORDERED_VECTORS

typedef struct UnorderedVectorStruct
{
    int capacity;
    int lastPosition;
    void* values;
    size_t elementSize;

    void (*init)(struct UnorderedVectorStruct* self, int capacity, size_t elementSize);
    void (*insert)(struct UnorderedVectorStruct* self, void* value); 
    void* (*remove)(struct UnorderedVectorStruct* self, void* value);
    int (*search)(struct UnorderedVectorStruct* self, void* value);
    bool (*isFull)(struct UnorderedVectorStruct* self);
} UnorderedVectorStruct;

void UnVecInitImp(struct UnorderedVectorStruct* self, int capacity, size_t elementSize);
bool UnVecIsFullImp(struct UnorderedVectorStruct* self);
void UnVecInsertImp(struct UnorderedVectorStruct* self, void* value);
int UnVecSearchImp(struct UnorderedVectorStruct* self, void* value);
void* UnVecRemoveImp(struct UnorderedVectorStruct* self, void* value);
void UnorderedVectorStruct_Setup(UnorderedVectorStruct* vec, int capacity, size_t elementSize);

#endif