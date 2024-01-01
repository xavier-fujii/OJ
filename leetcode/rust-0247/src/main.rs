fn main() {
    println!("{:#?}", h_index(vec![3, 0, 6, 1, 5]));
    println!("{:#?}", h_index(vec![1, 3, 1]));
}

// https://leetcode.com/problems/h-index/
fn h_index(citations: Vec<i32>) -> i32 {
    let papers_number = citations.len() as i32;
    let mut array: [i32; 1001] = [0; 1001];

    for c in citations {
        array[c as usize] = array[c as usize] + 1;
    }

    let mut result = 0;
    let mut following_papers_number = papers_number;

    for idx in 0..=1000 {
        if idx <= following_papers_number {
            result = idx;
            following_papers_number = following_papers_number - array[idx as usize];
        }
    }

    result
}
