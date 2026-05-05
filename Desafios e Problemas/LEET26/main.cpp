#include <iostream>
#include <vector>

using namespace std;

class Solution{
    public:
        int removeDuplicates(vector<int>& nums) {
            if (nums.empty()) return 0;

            int n = nums.size();
            int k = 1;

            for (int i = 1; i < n; i++) {
                if (nums[i] != nums[k-1]) {
                    nums[k] = nums[i];
                    k++;
                }
            }
            
            return k;
        }
};

int main() {
    Solution solution;


    vector<int> nums = {1,1,1,1,2,2,2,2}; 

    int k = solution.removeDuplicates(nums);

    cout << "size: " << k << "\n";
    for (int i = 0; i < k; i++) {
        cout << nums[i] << "\n";
    }
}