# Note

- Just In Time Compiler

  - 하나의 큰 CSS 파일이 아니라 쓴 만큼만 로드 된다.
  - 테일윈드의 제약에서 벗어난 값을 지정할 수 있음.
    - text-5xl 과 같이 정해진 값이 아니라 text-[800px], color-[#000] 과 같이 지정할 수 있음.
  - backgroundImage
    - bg-[url('...')]

- Auth part Two

  - 인풋안에 다른 요소를 넣은 것 같이 보이게 하기

    ```tsx
    <div className="flex rounded-md shadow-sm">
      <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
        +82
      </span>
      <input
        type="number"
        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        required
      />
    </div>
    ```

  - 라인 중간에 텍스트 삽입해서
    - ---- 텍스트 ---- 이런식으로 작성.
    ```tsx
    <div className="relative">
      <div className="absolute w-full border-t border-gray-300" />
      <div className="relative -top-3 text-center ">
        <span className="bg-white px-2 text-sm text-gray-500">
          Or enter with
        </span>
      </div>
    </div>
    ```
