class Vector:
    def __init__(self,capacity, isOrdored=False):
        # According to the data structure definition, a vector is uniform:
        # all elements must have the same type.
        self.__isOrdored = isOrdored
        self.__type = None
        self.__lastPosition: int = -1
        self.__capacity: int = capacity
        self.__values = [None] * capacity
    
    def __defineType(self, defType):
        self.__type = defType

    def getLastPosition(self):
        return self.__lastPosition

    def isFull(self):
        return self.__lastPosition == self.__capacity - 1 

    def insert(self, value):
        if self.isFull(): return None
        if (self.__type == None): self.__defineType(type(value))
        if (not isinstance(value, self.__type)): return None
        if self.__isOrdored: self._ordoredInsert(value)

        self.__lastPosition += 1
        self.__values[self.__lastPosition] = value
    
    def _ordoredInsert(self,value):
        i = 0
        j = self.__lastPosition
        while i < j:
            if self.__values[i] > value:
                break
            i+=1
        while j >= i:
            self.__values[j+1] = self.__values[j]
            j-=1
        self.__values[i] = value

    def binarySearch(self,value):
        if not self.__isOrdored: return None
        if self.__lastPosition == -1: return -1
        limit_inf = 0
        limit_sup = self.__lastPosition
        while limit_inf <= limit_sup:
            index = (limit_inf+limit_sup)//2 
        
            if value == self.__values[index]:
                return index
            if value > self.__values[index]:
                limit_inf = index + 1
            else:
                limit_sup = index - 1

        return -1

    def linearSearch(self, value):
        if self.__lastPosition == -1: return -1
        for [i, internalValue] in enumerate(self.__values):
            if internalValue == value:
                return i
        return -1


    def getValueByIndex(self, index):
        if index > self.__lastPosition or index < 0: return None
        return self.__values[index]
    
    def remove(self, value):
        index = self.search(value)
        if (index == -1): return None
        for i in range(index, self.__lastPosition):
            self.__values[i] = self.__values[i+1]
        self.__values[self.__lastPosition] = None
        self.__lastPosition -= 1
            

    def removeByIndex(self, index):
        if index > self.__lastPosition or index < 0: return None
        for i in range(index, self.__lastPosition):
            self.__values[i] = self.__values[i+1]
    