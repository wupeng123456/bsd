package Demo1;

public class demo1_17 {
/**
 * 1）定义一个数组。
2）定义一个函数将选择排序的功能封装到函数中。
3）如果两个空间中需要交换数据，这时需要定义一个临时变量temp来保存选中空间的数据。
4）使用for循环对选中空间的下标进行遍历，这个for循环作为外层循环。
5）使用for循环对选中空间后面的空间的下标进行遍历，这个for循环作为内层循环。
6）使用判断结构对选中空间中的数据和后面的空间中的数据进行比较，如果选中空间中数据大于后面空间中的数据，则交换空间中的数据。如果选中空间中数据小于后面空间中的数据，则不交换空间中的数据。
7）在定义一个函数用来打印数组中的数据。

*/
	public static void main(String[] args) 
	{
		int[] arr = {11,22,33,44,55,66,77,99,0,-1};
		printArray(arr);
		selectSort(arr);
		printArray(arr);
	}
	public static void selectSort( int[] arr )
	{
		//进行对数组的排序
		for ( int i = 0; i<arr.length - 1 ; i++ ) 
			//外循环提供的是当前需要选择的那个空间的下标
		{
			for ( int j = i+1 ; j<arr.length ; j++ ) 
				//内循环提供的是 外循环提供的某个空间身后剩余的所有空间下标
			{
				//对选中的空间和后面的某个空间进行比较
				if( arr[i] > arr[j] )
				{
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
	}
	//打印数组中的数据
		public static void printArray( int[] arr )
		{
			for ( int i=0; i<arr.length ; i++ )
			{
				System.out.print(arr[i] + " ");
			}	
			System.out.println();
			
		}

}
