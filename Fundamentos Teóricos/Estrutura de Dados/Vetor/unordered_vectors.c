#include "unordered_vectors.h"

void UnVecInitImp(struct UnorderedVectorStruct* self, int capacity, size_t elementSize)
{
    self->capacity = capacity;
    self->elementSize = elementSize; 
    self->lastPosition = -1;
    self->values = malloc(self->elementSize  * self->capacity);
    if (self->values == NULL) return; 
};

bool UnVecIsFullImp(struct UnorderedVectorStruct* self) 
{
    if (self->lastPosition == self->capacity - 1) return true;
    return false;
};

void UnVecInsertImp(struct UnorderedVectorStruct* self, void* value)
{
    if (self->isFull(self)) return;

    self->lastPosition += 1;
    void* data =  (char*)self->values + self->lastPosition * self->elementSize;
    memcpy(data,value, self->elementSize);
};

int UnVecSearchImp(struct UnorderedVectorStruct* self, void* value) 
{
    for (int i = 0; i <= self->lastPosition; i++)
    {
        void* valuePos = (char*)self->values + i * self->elementSize;
        if (memcmp(valuePos,value, self->elementSize) == 0) {
            return i;
        }
    }
    return -1;
};

void* UnVecRemoveImp(struct UnorderedVectorStruct* self, void* value) 
{
    if (self->lastPosition == -1) return NULL;

    int pos = self->search(self,value);
    if (pos == -1) return NULL;
    void* temp = malloc(self->elementSize);
    memcpy(temp, (char*)self->values + pos * self->elementSize, self->elementSize);

    for (int i = pos; i < self->lastPosition; i++)
    {
        memcpy(
            (char*)self->values + i * self->elementSize,
            (char*)self->values + (i+1) * self->elementSize,
            self->elementSize);
    }
    self->lastPosition -= 1;
    return temp;
};


void UnorderedVectorStruct_Setup(UnorderedVectorStruct* vec, int capacity, size_t elementSize)
{
    vec->init = UnVecInitImp;
    vec->insert = UnVecInsertImp;
    vec->remove = UnVecRemoveImp;
    vec->search = UnVecSearchImp;
    vec->isFull = UnVecIsFullImp;

    vec->init(vec, capacity, elementSize);
}

