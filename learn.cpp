#include<iostream>
using namespace std;
void printhello(int n);
int main(){
    int n;
    cin>>n;
    int sum=0;
    int array[n];
    for(int i=0;i<n;i++){
        cin>>array[i];
        sum+=array[i];
    }
    cout<<sum<<endl;
    printhello(n);
    return 0;
}
void printhello(int n){
    if(n==0){
        return;
    }
    cout<<"print hello"<<endl;
    printhello(n-1);
}